var produtos = [
   {
      codigo: 1101,
      descricao: 'Notebook Intel Core i7 8GB',
      preco: 2799,
      quantidade: 3,
      imagem: 'http://localhost:3000/images/notebook1.jpg',
      especificacao: 'Lorem ipsum sic dolor amet'
   },
   {
      codigo: 1102,
      descricao: 'Notebook Intel Core i5 6GB',
      preco: 2399,
      quantidade: 2,
      imagem: 'http://localhost:3000/images/notebook2.jpg',
      especificacao: 'Lorem ipsum sic dolor amet'
   },
   {
      codigo: 1201,
      descricao: 'Smartphone LG K10',
      preco: 579,
      quantidade: 4,
      imagem: 'http://localhost:3000/images/smartphone1.jpg',
      especificacao: 'Lorem ipsum sic dolor amet'
   },
   {
      codigo: 1202,
      descricao: 'Smartphone Samsung J7',
      preco: 679,
      quantidade: 6,
      imagem: 'http://localhost:3000/images/smartphone2.jpg',
      especificacao: 'Lorem ipsum sic dolor amet'
   }
]

module.exports = function() {

   controller = {};

   // Retorna todos os objetos da coleção
   controller.listar = function(req, res) {
      res.json(produtos).end();
   }

   // Retorna um único objeto da coleção
   controller.obterUm = function(req, res) {
      var id = req.params.id;
      var encontrado = produtos.find(function(p) {
         return p.codigo == id;
      });

      if(encontrado) {
         res.json(encontrado).end();
      }
      else {
         res.status(404).end();
      }
   }

   return controller;

}