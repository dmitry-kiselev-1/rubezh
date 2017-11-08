# Задание от 07.11

1. Создать Angular 4 проект
1. Прописать 2 стейта: login и home
1. Реализовать описаный ниже функционал
1. В ответном письме указать ссылку на git с решением

## Стейт "login"

Интерфейс:

- ввод email с валидацией (Angular)
- кнопка "Войти"

Задачи:

1. при вводе email печатать содержимое input в консоль с задержкой 300мс, реализованной через rxjs
1. при нажатии "Войти", сэмитировать задержку в 2с в сервисе авторизации и перейти к стейту home

## Стейт "home"

Интерфейс:

- дерево [PrimeNg](https://www.primefaces.org/primeng/#/tree)

Задачи:

1. Создать сервис получения данных, описанных во [вложениях](rubezh-task/tree/master/attachment) 1 и 2 
1. Подключить дерево PrimeNg и отобразить данные дерева 1. Текст листьев дерева, значения которых отличаются от соответствующих значений дерева 2 сделать красным цветом
1. При выборе листа дерева, выделить цветом родительские узлы, при отмене выбора - снять выделение
