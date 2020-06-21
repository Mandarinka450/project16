<?php
   function getFriendsList($type, $page)
   {
        // осуществляем подключение к базе данных
        $mysqli = mysqli_connect('std-mysql', 'std_942', 'Ns120765003', 'std_942');
        if( mysqli_connect_errno() ) // проверяем корректность подключения
           return 'Ошибка подключения к БД: '.mysqli_connect_error();
        // формируем и выполняем SQL-запрос для определения числа записей
        $sql_res=mysqli_query($mysqli, 'SELECT COUNT(*) FROM std_942.project');
        // проверяем корректность выполнения запроса и определяем его результат
        if( !mysqli_errno($mysqli) && $row=mysqli_fetch_row($sql_res) )
        {
           if( !$TOTAL=$row[0] ) // если в таблице нет записей
              return 'В таблице нет данных'; // возвращаем сообщение
           $PAGES = ceil($TOTAL/3);// вычисляем общее количество страниц
           if( $page>=$PAGES ) // если указана страница больше максимальной
            $page=$TOTAL-1; // будем выводить последнюю страницу
            $diapazon=$page*6;
            if ($_GET['sort'] == 'byid')// формируем и выполняем SQL-запрос для выборки записей из БД
                $sql='SELECT * FROM project LIMIT '.$diapazon.', 6';
            if ($_GET['sort'] == 'fam')
                $sql='SELECT * FROM project ORDER BY price LIMIT '.$diapazon.', 6';
            if ($_GET['sort'] == 'birth')
                $sql='SELECT * FROM project ORDER BY price LIMIT '.$diapazon.', 6';
           $sql_res=mysqli_query($mysqli, $sql);
           $ret='<div class="container__block">'; // строка с будущим контентом страницы
           while( $row=mysqli_fetch_assoc($sql_res) ) // пока есть записи
           {
               // выводим каждую запись как строку таблицы
               $ret.='<div class="block"><h4 class="block__title"><br>'.$row['title'].'</h4>
               <p class="block__description"> <b>Описание:</b><br>' .$row['description'].'</p>
               <div class="block__image"><img src="image' .$row['image'].'"></div>
               <div class="block__teacher"><b>Преподаватель:</b><br>' .$row['teacher'].'</div>
               <div class="block__quantity"><b>Количество занятий в неделю:</b><br>' .$row['quantity'].'</div></div>';
            }
            $ret.='</div>'; // заканчиваем формирование таблицы с контентом
            if( $PAGES>1 ) // если страниц больше одной – добавляем пагинацию
            {
               $ret.='<div id="pages">Выберите страницу: '; // блок пагинации
               for($i=0; $i<$PAGES; $i++) // цикл для всех страниц пагинации
               if( $i != $page ) // если не текущая страница
                    $ret.='<a href="?p=viewer&pg='.$i.'&sort='.$_GET['sort'].'"> '.($i+1).'</a>';
               else // если текущая страница
               $ret.='<span> '.($i+1).'</span>';
               $ret.='</div>';
            }
            return $ret; // возвращаем сформированный контент
        }
        // если запрос выполнен некорректно
        return 'Неизвестная ошибка'; // возвращаем сообщение
   }

?>