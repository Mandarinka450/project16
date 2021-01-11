from django.contrib import admin
from .models import Services, Specialist

class SpecialistInline(admin.TabularInline):
    model = Specialist


class ServicesAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'tariff_plan', 'price')
    search_fields = ("price__startswith", )
    inlines = [SpecialistInline]


admin.site.register(Services, ServicesAdmin)


class SpecialistAdmin(admin.ModelAdmin):
    list_display = ('name', 'surname', 'description')
    search_fields = ("name__startswith", )


admin.site.register(Specialist, SpecialistAdmin)

