const queries = {
    addNewUser: "insert into dbo.Usuarios(id, nombre, apellido, fecha_nacimiento, email, password, fecha_creacion, img_url_profile, tipo_usuario) values (@id, @nombre, @apellido, @fecha_nacimiento, @email, @password, @fecha_creacion, @img_url_profile, @tipo_usuario)",
    addNewScenario: "insert into dbo.escenarios(id, nombre_escenario, num_likes, num_dislikes, img_url) values (@id, @nombre_escenario, @num_likes, @num_dislikes, @img_url)",
    addNewComment: "insert into dbo.comentarios(id, texto, escenario_id, usuario_id, fecha_creacion) values (@id, @texto, @escenario_id, @usuario_id, @fecha_creacion)",
    addNewSuggest: "insert into dbo.sugerencias(id, tipo_sugerencia, comentario_sugerencia, fecha_creacion, usuario_id) values (@id, @tipo_sugerencia, @comentario_sugerencia, @fecha_creacion, @usuario_id)"
}

export default queries