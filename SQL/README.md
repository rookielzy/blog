# SQL

## 主要还是多练习使用

```sql
SELECT * FROM table_name;

CREATE TABLE table_name (
    column_1 data_type,
    column_2 data_type,
    column_3 data_type
);

INSERT INTO table_name (id, name, age) VALUES (1, 'Kendrick Lamar', 21);
```

## Text and string types
`text` — a string of any length, like Python str or unicode types.

`char(n)` — a string of exactly n characters.

`varchar(n)` — a string of up to n characters.

## Numeric types
`integer` — an integer value, like Python int.

`real` — a floating-point value, like Python float. Accurate up to six decimal places.

`double precision` — a higher-precision floating-point value. Accurate up to 15 decimal places.

`decimal` — an exact decimal value.

## Date and time types
`date` — a calendar date; including year, month, and day.

`time` — a time of day.

`timestamp` — a date and time together.