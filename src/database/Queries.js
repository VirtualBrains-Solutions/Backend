const queries = {
    addNewUser: "insert into dbo.Usuarios(id, nombre, apellido, fecha_nacimiento, email, password, fecha_creacion, img_url_profile, tipo_usuario, estado_usuario) values (@id, @nombre, @apellido, @fecha_nacimiento, @email, @password, @fecha_creacion, @img_url_profile, @tipo_usuario, @estado_usuario)",
    addNewScenario: "insert into dbo.escenarios(id, nombre_escenario, num_likes, num_dislikes, img_url) values (@id, @nombre_escenario, @num_likes, @num_dislikes, @img_url)",
    addNewComment: "insert into dbo.comentarios(id, texto, escenario_id, usuario_id, fecha_creacion) values (@id, @texto, @escenario_id, @usuario_id, @fecha_creacion)",
    addNewSuggest: "insert into dbo.sugerencias(id, tipo_sugerencia, comentario_sugerencia, fecha_creacion, usuario_id) values (@id, @tipo_sugerencia, @comentario_sugerencia, @fecha_creacion, @usuario_id)",
    addNewSession: "insert into dbo.sesiones(id, fecha_creacion, usuario_id, nombre_sesion, medico_id) values (@id, @fecha_creacion, @usuario_id, @nombre_sesion, @medico_id)",
    addNewClinicNote: "insert into dbo.notas_clinicas(id, sesion_id, descripcion) values(@id, @sesion_id, @descripcion)",
    addNewPlan: "insert into dbo.planes(id, fecha_creacion, especialista_id, paciente_id, descripcion_plan, nombre_plan) values(@id, @fecha_creacion, @especialista_id, @paciente_id, @descripcion_plan, @nombre_plan)",
    addNewGoal: "insert into dbo.metas (id, plan_id, descripcion, estado_meta) values (@id, @plan_id, @descripcion, @estado_meta)",
    addNewFavoriteScenario: "insert into dbo.escenarios_favoritos(id, usuario_id, escenario_id) values (@id, @usuario_id, @escenario_id)"
}

export default queries