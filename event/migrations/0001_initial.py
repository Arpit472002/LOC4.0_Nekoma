# Generated by Django 3.2.5 on 2022-03-12 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_name', models.CharField(max_length=250)),
                ('event_description', models.TextField()),
                ('event_image', models.ImageField(default='images/default.jpg', upload_to='images/')),
                ('event_venue', models.CharField(max_length=250)),
                ('event_date', models.DateField()),
                ('event_time', models.TimeField()),
                ('event_duration', models.IntegerField()),
                ('no_of_volunteers', models.IntegerField()),
            ],
        ),
    ]
