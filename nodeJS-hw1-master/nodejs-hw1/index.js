const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'qwe123', {
  host: 'localhost',
  dialect: 'mysql',


  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

});

const Post = sequelize.define('post', {
  title: Sequelize.STRING,
  text: Sequelize.TEXT
});

sequelize.sync()


async function fillDB() {
  await sequelize.sync()
  var post1 = await Post.create({
    title: "First post" ,
    text: "Lorem ipsum dolor."
  });
}
fillDB();