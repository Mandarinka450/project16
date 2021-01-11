from django.contrib import admin
from .models import Articles, News
from import_export import resources


class ArticlesAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')


admin.site.register(Articles, ArticlesAdmin)


class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')


admin.site.register(News, NewsAdmin)


class NewsResource(resources.ModelResource):

    class Meta:
        model = News
