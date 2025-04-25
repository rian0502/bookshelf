const Controller = require('./controller');

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: Controller.index,
  },
  {
    method: 'POST',
    path: '/books',
    handler: Controller.create,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: Controller.detail,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: Controller.update,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: Controller.destroy,
  },
];

module.exports = routes;
