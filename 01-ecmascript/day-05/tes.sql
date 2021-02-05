select * from countries

select * from regions

select * from countries where region_id = 3

select a.region_id, a.region_name,b.country_id, b.country_name
from regions a inner join countries b
on a.region_id=b.region_id
where region_name='Asia'
order by region_name, country_id

select a.region_id,a.region_name,count(region_name) as total
from regions a inner join countries b
on a.region_id=b.region_id
group by a.region_id
order by region_id

-- join 3 table with 
select a.region_id,a.region_name,b.country_id,b.country_name,
count(d.department_id) as total
from regions a join countries b on a.region_id=b.region_id
join locations l on b.country_id=l.country_id
join departments d on l.location_id = d.location_id
group by a.region_id,a.region_name,b.country_id,b.country_name

//subquery 
select * from employees where department_id in (
	select d.department_id
	join locations l on b.country_id = l.country_id
	join departments d on l.location_id = d.location_id
	where a.region_id = 2
)

// kasus tampilkan jumlah pegawai di tiap countries
select * from employees where department_id in (
	select d.department_id
	from countries a join locations l on a.country_id = l.country_id
	join departments d on l.location_id = d.location_id
	where a.region_id = 1
)

select * from countries