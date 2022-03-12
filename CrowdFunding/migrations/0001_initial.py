# Generated by Django 3.2.5 on 2022-03-12 15:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CrowdFundingEvent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reason', models.CharField(max_length=250)),
                ('description', models.TextField()),
                ('total_amount_needed', models.IntegerField()),
            ],
        ),
    ]
