# Generated by Django 2.2.7 on 2020-02-18 11:15

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='refugees2011',
            fields=[
                ('Id', models.IntegerField(primary_key=True, serialize=False)),
                ('land', models.CharField(max_length=100)),
                ('pop', models.FloatField(blank=True, null=True)),
                ('refRatio', models.FloatField(blank=True, null=True)),
                ('refTotal', models.FloatField(blank=True, null=True)),
                ('male', models.FloatField(blank=True, null=True)),
                ('female', models.FloatField(blank=True, null=True)),
                ('u18', models.FloatField(blank=True, null=True)),
                ('u18erstantrag', models.FloatField(blank=True, null=True)),
                ('u34', models.FloatField(blank=True, null=True)),
                ('u34erstantrag', models.FloatField(blank=True, null=True)),
                ('u64', models.FloatField(blank=True, null=True)),
                ('u64erstantrag', models.FloatField(blank=True, null=True)),
                ('ue65', models.FloatField(blank=True, null=True)),
                ('ue65erstantrag', models.FloatField(blank=True, null=True)),
                ('unknown', models.FloatField(blank=True, null=True)),
                ('erstantrag', models.FloatField(blank=True, null=True)),
                ('folgeantrag', models.FloatField(blank=True, null=True)),
                ('coord', django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
            options={
                'verbose_name_plural': 'refugees2011',
            },
        ),
        migrations.CreateModel(
            name='refugees2012',
            fields=[
                ('Id', models.IntegerField(primary_key=True, serialize=False)),
                ('land', models.CharField(max_length=100)),
                ('pop', models.FloatField(blank=True, null=True)),
                ('refRatio', models.FloatField(blank=True, null=True)),
                ('refTotal', models.FloatField(blank=True, null=True)),
                ('male', models.FloatField(blank=True, null=True)),
                ('female', models.FloatField(blank=True, null=True)),
                ('u18', models.FloatField(blank=True, null=True)),
                ('u18erstantrag', models.FloatField(blank=True, null=True)),
                ('u34', models.FloatField(blank=True, null=True)),
                ('u34erstantrag', models.FloatField(blank=True, null=True)),
                ('u64', models.FloatField(blank=True, null=True)),
                ('u64erstantrag', models.FloatField(blank=True, null=True)),
                ('ue65', models.FloatField(blank=True, null=True)),
                ('ue65erstantrag', models.FloatField(blank=True, null=True)),
                ('unknown', models.FloatField(blank=True, null=True)),
                ('erstantrag', models.FloatField(blank=True, null=True)),
                ('folgeantrag', models.FloatField(blank=True, null=True)),
                ('coord', django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
            options={
                'verbose_name_plural': 'refugees2012',
            },
        ),
        migrations.CreateModel(
            name='refugees2013',
            fields=[
                ('Id', models.IntegerField(primary_key=True, serialize=False)),
                ('land', models.CharField(max_length=100)),
                ('pop', models.FloatField(blank=True, null=True)),
                ('refRatio', models.FloatField(blank=True, null=True)),
                ('refTotal', models.FloatField(blank=True, null=True)),
                ('male', models.FloatField(blank=True, null=True)),
                ('female', models.FloatField(blank=True, null=True)),
                ('u18', models.FloatField(blank=True, null=True)),
                ('u18erstantrag', models.FloatField(blank=True, null=True)),
                ('u34', models.FloatField(blank=True, null=True)),
                ('u34erstantrag', models.FloatField(blank=True, null=True)),
                ('u64', models.FloatField(blank=True, null=True)),
                ('u64erstantrag', models.FloatField(blank=True, null=True)),
                ('ue65', models.FloatField(blank=True, null=True)),
                ('ue65erstantrag', models.FloatField(blank=True, null=True)),
                ('unknown', models.FloatField(blank=True, null=True)),
                ('erstantrag', models.FloatField(blank=True, null=True)),
                ('folgeantrag', models.FloatField(blank=True, null=True)),
                ('coord', django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
            options={
                'verbose_name_plural': 'refugees2013',
            },
        ),
        migrations.CreateModel(
            name='refugees2014',
            fields=[
                ('Id', models.IntegerField(primary_key=True, serialize=False)),
                ('land', models.CharField(max_length=100)),
                ('pop', models.FloatField(blank=True, null=True)),
                ('refRatio', models.FloatField(blank=True, null=True)),
                ('refTotal', models.FloatField(blank=True, null=True)),
                ('male', models.FloatField(blank=True, null=True)),
                ('female', models.FloatField(blank=True, null=True)),
                ('u18', models.FloatField(blank=True, null=True)),
                ('u18erstantrag', models.FloatField(blank=True, null=True)),
                ('u34', models.FloatField(blank=True, null=True)),
                ('u34erstantrag', models.FloatField(blank=True, null=True)),
                ('u64', models.FloatField(blank=True, null=True)),
                ('u64erstantrag', models.FloatField(blank=True, null=True)),
                ('ue65', models.FloatField(blank=True, null=True)),
                ('ue65erstantrag', models.FloatField(blank=True, null=True)),
                ('unknown', models.FloatField(blank=True, null=True)),
                ('erstantrag', models.FloatField(blank=True, null=True)),
                ('folgeantrag', models.FloatField(blank=True, null=True)),
                ('coord', django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
            options={
                'verbose_name_plural': 'refugees2014',
            },
        ),
        migrations.CreateModel(
            name='refugees2015',
            fields=[
                ('Id', models.IntegerField(primary_key=True, serialize=False)),
                ('land', models.CharField(max_length=100)),
                ('pop', models.FloatField(blank=True, null=True)),
                ('refRatio', models.FloatField(blank=True, null=True)),
                ('refTotal', models.FloatField(blank=True, null=True)),
                ('male', models.FloatField(blank=True, null=True)),
                ('female', models.FloatField(blank=True, null=True)),
                ('u18', models.FloatField(blank=True, null=True)),
                ('u18erstantrag', models.FloatField(blank=True, null=True)),
                ('u34', models.FloatField(blank=True, null=True)),
                ('u34erstantrag', models.FloatField(blank=True, null=True)),
                ('u64', models.FloatField(blank=True, null=True)),
                ('u64erstantrag', models.FloatField(blank=True, null=True)),
                ('ue65', models.FloatField(blank=True, null=True)),
                ('ue65erstantrag', models.FloatField(blank=True, null=True)),
                ('unknown', models.FloatField(blank=True, null=True)),
                ('erstantrag', models.FloatField(blank=True, null=True)),
                ('folgeantrag', models.FloatField(blank=True, null=True)),
                ('coord', django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
            options={
                'verbose_name_plural': 'refugees2015',
            },
        ),
        migrations.CreateModel(
            name='refugees2016',
            fields=[
                ('Id', models.IntegerField(primary_key=True, serialize=False)),
                ('land', models.CharField(max_length=100)),
                ('pop', models.FloatField(blank=True, null=True)),
                ('refRatio', models.FloatField(blank=True, null=True)),
                ('refTotal', models.FloatField(blank=True, null=True)),
                ('male', models.FloatField(blank=True, null=True)),
                ('female', models.FloatField(blank=True, null=True)),
                ('u18', models.FloatField(blank=True, null=True)),
                ('u18erstantrag', models.FloatField(blank=True, null=True)),
                ('u34', models.FloatField(blank=True, null=True)),
                ('u34erstantrag', models.FloatField(blank=True, null=True)),
                ('u64', models.FloatField(blank=True, null=True)),
                ('u64erstantrag', models.FloatField(blank=True, null=True)),
                ('ue65', models.FloatField(blank=True, null=True)),
                ('ue65erstantrag', models.FloatField(blank=True, null=True)),
                ('unknown', models.FloatField(blank=True, null=True)),
                ('erstantrag', models.FloatField(blank=True, null=True)),
                ('folgeantrag', models.FloatField(blank=True, null=True)),
                ('coord', django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
            options={
                'verbose_name_plural': 'refugees2016',
            },
        ),
        migrations.CreateModel(
            name='refugees2017',
            fields=[
                ('Id', models.IntegerField(primary_key=True, serialize=False)),
                ('land', models.CharField(max_length=100)),
                ('pop', models.FloatField(blank=True, null=True)),
                ('refRatio', models.FloatField(blank=True, null=True)),
                ('refTotal', models.FloatField(blank=True, null=True)),
                ('male', models.FloatField(blank=True, null=True)),
                ('female', models.FloatField(blank=True, null=True)),
                ('u18', models.FloatField(blank=True, null=True)),
                ('u18erstantrag', models.FloatField(blank=True, null=True)),
                ('u34', models.FloatField(blank=True, null=True)),
                ('u34erstantrag', models.FloatField(blank=True, null=True)),
                ('u64', models.FloatField(blank=True, null=True)),
                ('u64erstantrag', models.FloatField(blank=True, null=True)),
                ('ue65', models.FloatField(blank=True, null=True)),
                ('ue65erstantrag', models.FloatField(blank=True, null=True)),
                ('unknown', models.FloatField(blank=True, null=True)),
                ('erstantrag', models.FloatField(blank=True, null=True)),
                ('folgeantrag', models.FloatField(blank=True, null=True)),
                ('coord', django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
            options={
                'verbose_name_plural': 'refugees2017',
            },
        ),
        migrations.CreateModel(
            name='refugees2018',
            fields=[
                ('Id', models.IntegerField(primary_key=True, serialize=False)),
                ('land', models.CharField(max_length=100)),
                ('pop', models.FloatField(blank=True, null=True)),
                ('refRatio', models.FloatField(blank=True, null=True)),
                ('refTotal', models.FloatField(blank=True, null=True)),
                ('male', models.FloatField(blank=True, null=True)),
                ('female', models.FloatField(blank=True, null=True)),
                ('u18', models.FloatField(blank=True, null=True)),
                ('u18erstantrag', models.FloatField(blank=True, null=True)),
                ('u34', models.FloatField(blank=True, null=True)),
                ('u34erstantrag', models.FloatField(blank=True, null=True)),
                ('u64', models.FloatField(blank=True, null=True)),
                ('u64erstantrag', models.FloatField(blank=True, null=True)),
                ('ue65', models.FloatField(blank=True, null=True)),
                ('ue65erstantrag', models.FloatField(blank=True, null=True)),
                ('unknown', models.FloatField(blank=True, null=True)),
                ('erstantrag', models.FloatField(blank=True, null=True)),
                ('folgeantrag', models.FloatField(blank=True, null=True)),
                ('coord', django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
            options={
                'verbose_name_plural': 'refugees2018',
            },
        ),
        migrations.CreateModel(
            name='WaterConsumption',
            fields=[
                ('Id', models.IntegerField(primary_key=True, serialize=False)),
                ('Suburb', models.CharField(max_length=100)),
                ('NoOfSingleResProp', models.IntegerField()),
                ('AvgMonthlyKL', models.IntegerField()),
                ('AvgMonthlyKLPredicted', models.IntegerField()),
                ('PredictionAccuracy', models.IntegerField()),
                ('Month', models.CharField(max_length=50)),
                ('Year', models.IntegerField()),
                ('DateTime', models.DateTimeField()),
                ('geom', django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
            options={
                'verbose_name_plural': 'WaterConsumption',
            },
        ),
    ]
