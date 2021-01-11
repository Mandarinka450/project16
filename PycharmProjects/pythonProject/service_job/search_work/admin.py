from django.contrib import admin
from .models import Vacancies, Vacancies_cities, Companies, Reviews, Users, Summary
from django.urls import reverse
from django.utils.http import urlencode
from django.utils.html import format_html



class VacanciesAdmin(admin.ModelAdmin):
    list_display = ('name_of_vacancy',  'salary_of_mounth', 'graphic_of_work', 'view_reviews_link')
    list_filter = ("salary_of_mounth", "graphic_of_work")
    search_fields = ("name_of_vacancy__startswith", )


    def view_reviews_link(self, obj):
        count = obj.summary_set.count()
        url = (
            reverse("admin:search_work_reviews_changelist")
            + "?"
            + urlencode({"id_vacancies": f"{obj.id}"})
        )
        return format_html('<a href="{}">{} Резюме</a>', url, count)

        view_reviews_link.short_description = "Резюме"


admin.site.register(Vacancies, VacanciesAdmin)


class Vacancies_citiesAdmin(admin.ModelAdmin):
    list_display = ('name_cities', 'quantity_vacancies')
    search_fields = ("name_cities__startswith", )


admin.site.register(Vacancies_cities, Vacancies_citiesAdmin)


class CompaniesAdmin(admin.ModelAdmin):
    list_display = ('name_company', 'description_company', 'rating_company')
    list_filter = ("rating_company",)
    search_fields = ("name_company__startswith", )


admin.site.register(Companies, CompaniesAdmin)


class ReviewsAdmin(admin.ModelAdmin):
    list_display = ('name', 'surname', 'title', 'message')
    search_fields = ("name__startswith", )


admin.site.register(Reviews, ReviewsAdmin)



class UsersAdmin(admin.ModelAdmin):
    list_display = ('name_user', 'surname_user', 'email', 'date_register')


admin.site.register(Users, UsersAdmin)


class UsersInline(admin.TabularInline):
    model = Users


class SummaryAdmin(admin.ModelAdmin):
    list_display = ('about_myself', 'position_worker', 'work_experience')
    list_filter = ("work_experience", "position_worker")
    search_fields = ("position_worker__startswith", )
    inlines = [UsersInline]


admin.site.register(Summary, SummaryAdmin)



