const queries = {
    addNewUser: "insert into dbo.Usuarios(id, nombre, apellido, fecha_nacimiento, email, password, fecha_creacion, img_url_profile, tipo_usuario) values (@id, @nombre, @apellido, @fecha_nacimiento, @email, @password, @fecha_creacion, @img_url_profile, @tipo_usuario)",
    addNewScenario: "insert into dbo.escenarios(id, nombre_escenario, num_likes, num_dislikes, img_url) values (@id, @nombre_escenario, @num_likes, @num_dislikes, @img_url)"
}

export default queries