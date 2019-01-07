# Buildings

Проект сверстан по методологии БЭМ.
Вспомогательные технологии: pug для шаблонов и less для файлов стилей.

Структура проекта:

```
bem/
  buildings/
    buildings.less
    buildings.pug
  h1.less
  ...
data/
  consult.pug
  discount.pug
img/
  ...
style/
  css/
    normalize.css
    style.css
  less/
    style.less
  less-abstract/
    __normalize.css
    __var.less
```

## bem

Здесь расположены блоки в терминах БЭМ. Одному блоку соответствует своя папка, имя которой = имени блока. Разметка реализована в технологии pug, стили разметки - в технологии less.
Некоторые блоки расположены вне своей папки так как имеют только одну технологию реализации - less.

## data

Здесь в технологии pug собраны массивы данных чтобы разгрузить шаблоны в БЭМ и отделить данные от представления. 
В идеале реализовать такое разделение по всем блокам, так как данные в реальных проектах будут приходить с сервера и чаще всего на фронтэнде совмещаться с шаблонами. Здесь же это сделано скорее для удобства чтения шаблонов, так как теперь они все более лаконичны и понятны.

## img

Статические файлы для разметки - векторная и растровая графика.

## style/css

Файл `normalize.css` это стандартный сброс стилей, а `style.css` компилируемый файл сборщиком.

## style/less

В файле `style.less` явно указаны все зависимости проекта в технологии less. С помощью сборщика этот файл компилируется в `/style/css/style.css` и подключается в конечном варианте html файла

## style/less-abstract

В файле `__normalize.less` хранятся пользовательские стили которые не вошли ни в один блок в терминах БЭМ, а в `__var.less` хранятся глобальные переменные которые затем используются в технологии less.

## index.pug

Описание разметки в технологии pug

## index__deprecated.html

Разметка без использования шаблонизатора. Этот устаревший файл, здесь он для наглядного сравнения объемов двух файлов разметки и ориентирования в файлах в целом.
Вот цифры для примерного понимания насколько оправдано использование шаблонов. Реализация в pug на 1/3 меньше в строчках кода и почти в 2 раза меньше в количестве символов.

## index.html

Компилируемый файл, итоговая страница.