const queries = {
    addNewUser: "insert into dbo.Usuarios(id, nombre, apellido, fecha_nacimiento, email, password, fecha_creacion, img_url_profile, tipo_usuario) values (@id, @nombre, @apellido, @fecha_nacimiento, @email, @password, @fecha_creacion, @img_url_profile, @tipo_usuario)"
}

export default queries