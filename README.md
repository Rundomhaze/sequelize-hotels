# Hotels

## Introduction

In this assignment, you will learn how to work with model connections. In this classic relational database approach, connections are as valuable as the information itself. You will learn how to connect models, reference other models, and write methods.

Before starting your releases, carefully examine these topics in the documentation:
- [Model]
- [Sequelize cli]
- [Associations]


![](hotels_schema.png)

*Figure 1*. Schema design for this assignment

You'll focus on connections, but imagine that you're building a complete application for booking hotel rooms. A room should know its Hotel, and Bookings should know its User and Room. Don't focus on booking dates or other unimportant details, but on correctly connecting the models.

After establishing the connections, you should be able to answer the following questions.

*For a user...*

1. What did the user book?
2. What rooms did the user book?
3. In which hotels did the user book a room?

*For a hotel...*

1. What rooms are available in the hotel?
2. What bookings did the hotel receive?
3. Which guests booked rooms at the hotel?

*For a room...*

1. This room is from what hotel?
2. Which booking booked this room?

*For a booking...*

1. This booking is for which guest?
2. The booking was for what room?
3. The booking was for what hotel?

## Releases

### Release 0: Build Models

You'll create all required models using Sequelize CLI. Look at the image, determine what entities you need, and create a model for each.

The following pages may be helpful:
- [Model]
- [Sequelize cli]


### Release 1: Organize Connections

Next, you need to establish connections by giving models links to other models. To better understand, take a close look at the above image. If you can answer all the questions, that means that you've correctly constructed your connections.

The following pages may be helpful:
- [Associations]
- [Model Querying]

<!--
### Release 1: Так ли нужны ссылки?
Подумайте, как можно реорганизовать структуру вашей БД. Постарайтесь добиться того, чтобы для ответа на большинство вышеприведенных вопросов нужно было взаимодействовать лишь с одной коллекцией. Вам нужно денормализовать вашу БД. Такой подход наиболее близок для документоориентированных БД. 
-->

## Conclusion

The goal of this assignment was to connect models and use object methods to form queries to the database. In this assignment, you learned about models, connections, and [Foreign Key](https://postgrespro.com/docs/postgresql/12/tutorial-fk) (and why / when you need to use them).


[Model]: https://sequelize.org/master/manual/model-querying-basics.html
[Sequelize cli]: https://sequelize.org/master/manual/migrations.html
[Associations]: https://sequelize.org/master/manual/assocs.html
[Model Querying]: https://sequelize.org/master/manual/model-querying-basics.html
