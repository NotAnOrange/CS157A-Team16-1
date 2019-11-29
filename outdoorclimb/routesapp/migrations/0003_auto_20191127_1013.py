# Generated by Django 2.2.6 on 2019-11-27 10:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('routesapp', '0002_auto_20191127_1000'),
    ]

    operations = [
        migrations.RenameField(
            model_name='routes',
            old_name='rock_name',
            new_name='route_name',
        ),
        migrations.AlterUniqueTogether(
            name='routes',
            unique_together={('route_id', 'route_name', 'park_name')},
        ),
    ]
