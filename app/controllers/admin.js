module.exports.add_noticia = function(application, req, res) {
    res.render('admin/form_add_noticia', {validacao: {}, noticia: {}});
};

module.exports.salvar_noticia = function(application, req, res) {
    var noticia = req.body;

    req.assert('titulo', 'Campo Titulo é obrigatorio').notEmpty();
    req.assert('resumo', 'Campo Resumo é obrigatorio').notEmpty();
    req.assert('resumo', 'Campo Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Campo Autor é obrigatorio').notEmpty();
    req.assert('data_noticia', 'Campo Data é obrigatorio').notEmpty();
    req.assert('noticia', 'Campo Notícia é obrigatorio').notEmpty();

    var erros = req.validationErrors();

    if(erros) {
        res.render('admin/form_add_noticia', {validacao: erros, noticia: noticia});
        return;
    }

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result) {
        res.redirect('/noticias');
    });
};