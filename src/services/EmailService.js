import EmailRepository from "../repositories/EmailRepository.js"
import QuestionnaireRepository from "../repositories/QuestionnaireRepository.js"
import FeedbackRepository from "../repositories/FeedbackRepository.js"
import SuggestRepository from "../repositories/SuggestRepository.js"
import PlansRepository from "../repositories/PlansRepository.js"
import GoalsRepository from "../repositories/GoalsRepository.js"
import UserRepository from "../repositories/UserRepository.js"

import exceljs from "exceljs"

import sendEmailWithFile from "../helpers/SendEmailWithFile.js"


class EmailService{
    constructor(db){
        this.emailRepository = new EmailRepository(db)
        this.questionnaireRepository = new QuestionnaireRepository(db)
        this.feedbackRepository = new FeedbackRepository(db)
        this.suggestionRepository = new SuggestRepository(db)
        this.planRepository = new PlansRepository(db)
        this.goalRepository = new GoalsRepository(db)
        this.userRepository = new UserRepository(db)
    }
    async getQuestionnarieData(id){
        const [
                questionnaireGeneralResponses,
                questionnairePreSocialResponses,
                questionnairePreInterviewResponses,
                questionnairePostSocialResponses,
                questionnairePostInterviewResponses,
                userInfo
        ]
        = await Promise.all([
            this.questionnaireRepository.getQuestionnarieGeneralAnswersByUserIdRepo(id),
            this.questionnaireRepository.getQuestionnariePreSocialAnswersByUserIdRepo(id),
            this.questionnaireRepository.getQuestionnariePreInterviewAnswersByUserIdRepo(id),
            this.questionnaireRepository.getQuestionnariePostSocialAnswersByUserIdRepo(id),
            this.questionnaireRepository.getQuestionnariePostInterviewAnswersByUserIdRepo(id),
            this.userRepository.getUserByIdRepo(id)
        ])
        return [questionnaireGeneralResponses,
            questionnairePreSocialResponses,
            questionnairePreInterviewResponses,
            questionnairePostSocialResponses,
            questionnairePostInterviewResponses,
            userInfo]
    }
    async sendEmail(id, body){
        // Get data
        const [
            questionnaireGeneralResponses,
            questionnairePreSocialResponses,
            questionnairePreInterviewResponses,
            questionnairePostSocialResponses,
            questionnairePostInterviewResponses,
            userInfo
        ] = await this.getQuestionnarieData(id)

        // Create excel
        const workbook = new exceljs.Workbook()

        // Create questionnaire general sheet
        const worksheet = workbook.addWorksheet("Cuestionario General")
        worksheet.columns = [
            {header: "ID registro", key: "id", with: 20 },
            {header: "ID usuario", key: "usuario_id", width: 20},
            {header: "Fecha de creacion", key: "fecha_creacion", width: 30},
            {header: '¿Te preocupa sentirte juzgado cuando interactúas en situaciones sociales?', key: "pregunta_1", with: 100},
            {header: 'Cuando estás en una reunión social, ¿sueles sentir inseguridad de lo que dices o lo que haces?', key: "pregunta_2", with: 200},
            {header: 'Antes de interactuar con otras personas, ¿piensas en evitar la situación para no sentirme incómodo/a?', key: "pregunta_3", with: 250},
            {header: '¿Te sientes incómodo al interactuar con personas que recién conoces?', key: "pregunta_4", with: 50},
            {header: '¿A menudo te preocupa que te humillen o te ridiculicen en situaciones sociales?', key: "pregunta_5", with: 50},
            {header: 'Cuando estás en una situación social, ¿sientes un aumento en tu ritmo cardíaco?', key: "pregunta_6", with: 50},
            {header: '¿Sientes que tus manos sudan cuando interactúas con desconocidos?', key: "pregunta_7", with: 50},
            {header: 'Cuando estás en situaciones sociales, ¿tiendes a sentir rigidez o tensión en los músculos?', key: "pregunta_8", with: 50},
            {header: '¿Sientes dificultad para respirar cuando te encuentras en situaciones sociales incómodas?', key: "pregunta_9", with: 50},
            {header: 'Cuando estás en situaciones sociales, ¿sientes que tus manos o cuerpo tiemblan?', key: "pregunta_10", with: 50},
            {header: '¿Tiendes a evitar reuniones o eventos sociales para no sentirte ansioso/a?', key: "pregunta_11", with: 50},
            {header: 'Cuando te encuentras en una situación social, ¿tiendes a retirarte o aislarte?', key: "pregunta_12", with: 50},
            {header: 'Cuando estás en situaciones sociales, ¿tiendes a cruzar los brazos o evitar el contacto visual para sentirte más seguro/a?', key: "pregunta_13", with: 50},
            {header: '¿Te cuesta hablar de forma clara cuando estás ansioso/a en situaciones sociales?', key: "pregunta_14", with: 50},
            {header: 'En situaciones sociales incómodas, ¿buscas excusas para irte lo antes posible?', key: "pregunta_15", with: 50},
        ]
        // Add registers to the questionnaire general sheet
        questionnaireGeneralResponses.forEach(item => {
            worksheet.addRow(item)
        })
        
        // Create questionnaire pre social sheet
        const worksheetPreSocial = workbook.addWorksheet("Cuestionario social_AA")
        worksheetPreSocial.columns = [
            {header: "ID registro", key: "id", width: 20 },
            {header: "Fecha de creacion", key: "fecha_creacion", width: 30},
            {header: 'Al acercarte a una conversación grupal, ¿piensas que los demás no querrán hablar contigo?', key: "pregunta_1", with: 100},
            {header: 'Cuando hablo con alguien del otro sexo, ¿me preocupa constantemente que me juzgue?', key: "pregunta_2", with: 200},
            {header: 'Mientras estoy hablando, ¿me preocupa si lo que estoy diciendo es irrelevante o aburrido?', key: "pregunta_3", with: 250},
            {header: 'Después de hablar con alguien, ¿tiendo a sobrepensar y preocuparme por las cosas que dije durante la conversación?', key: "pregunta_4", with: 50},
            {header: 'Antes de acercarme a hablar con alguien que no conozco, ¿pienso que me va a rechazar o ignorar?', key: "pregunta_5", with: 50},
            {header: '¿Siento que mi corazón late más rápido cuando estoy cerca de grupos de personas hablando?', key: "pregunta_6", with: 50},
            {header: 'Al acercarme a personas desconocidas, ¿siento que me empiezan a sudar las manos?', key: "pregunta_7", with: 50},
            {header: 'Cuando intento iniciar una conversación con alguien del otro sexo, ¿siento que mis manos o cuerpo tiemblan?', key: "pregunta_8", with: 50},
            {header: '¿Siento que mi cuerpo se tensa cuando estoy rodeado de personas hablando?', key: "pregunta_9", with: 50},
            {header: '¿Tiendo a evitar acercarme a grupos de personas para no tener que iniciar una conversación?', key: "pregunta_10", with: 50},
            {header: '¿Prefiero quedarme en un rincón o un lugar aislado?', key: "pregunta_11", with: 50},
            {header: '¿Tiendo a cruzar los brazos o evitar el contacto visual para sentirme más cómodo/a?', key: "pregunta_12", with: 50},
            {header: 'Si me siento incómodo/a, ¿suelo buscar una excusa para irme lo más rápido posible?', key: "pregunta_13", with: 50},
            {header: 'Cuando hablo con gente nueva, ¿a menudo me encuentro tartamudeando o teniendo dificultad para encontrar las palabras correctas?', key: "pregunta_14", with: 50}
        ]
        // Add registers to the questionnaire pre social sheet
        questionnairePreSocialResponses.forEach(item => {
            worksheetPreSocial.addRow(item)
        })

        // Create questionnaire post social sheet
        const worksheetPostSocial = workbook.addWorksheet("Cuestionario social_DA")
        worksheetPostSocial.columns = [
            {header: "ID registro", key: "id", width: 20 },
            {header: "Fecha de creacion", key: "fecha_creacion", width: 30},
            {header: 'Al acercarte a una conversación grupal después de usar la aplicación, ¿sientes que ahora te resulta más fácil pensar que los demás querrán hablar contigo?', key: "pregunta_1", with: 100},
            {header: 'Después de usar la aplicación, ¿sientes que te preocupa menos que alguien del otro sexo te juzgue mientras hablas?', key: "pregunta_2", with: 200},
            {header: 'Después de usar la aplicación, ¿te preocupa menos si lo que estás diciendo es irrelevante o aburrido?', key: "pregunta_3", with: 250},
            {header: 'Tras utilizar la aplicación, ¿sientes que ya no sobrepiensas tanto ni te preocupas tanto por las cosas que dijiste en una conversación?', key: "pregunta_4", with: 50},
            {header: 'Después de usar la aplicación, ¿crees que piensas menos que serás rechazado/a o ignorado/a antes de acercarte a alguien que no conoces?', key: "pregunta_5", with: 50},
            {header: '¿Sientes que, después de usar la aplicación, tu corazón late menos rápido cuando te acercas a grupos de personas hablando?', key: "pregunta_6", with: 50},
            {header: 'Tras el uso de la aplicación, ¿sientes que te sudan menos las manos al acercarte a personas desconocidas?', key: "pregunta_7", with: 50},
            {header: 'Después de usar la aplicación, ¿sientes menos temblores en tus manos o cuerpo cuando intentas iniciar una conversación con alguien del otro sexo?', key: "pregunta_8", with: 50},
            {header: '¿Te sientes menos tenso/a cuando estás rodeado/a de personas hablando, después de haber usado la aplicación?', key: "pregunta_9", with: 50},
            {header: 'Después de usar la aplicación, ¿sientes que evitas menos acercarte a grupos de personas para iniciar una conversación?', key: "pregunta_10", with: 50},
            {header: '¿Te sientes más cómodo/a al estar en el centro de la acción, en lugar de preferir un rincón o lugar aislado, después de usar la aplicación?', key: "pregunta_11", with: 50},
            {header: 'Después de usar la aplicación, ¿tiendes a cruzar menos los brazos o a evitar el contacto visual para sentirte más cómodo/a?', key: "pregunta_12", with: 50},
            {header: '¿Sientes que, tras usar la aplicación, buscas menos excusas para irte rápidamente cuando te sientes incómodo/a?', key: "pregunta_13", with: 50},
            {header: 'Después de haber usado la aplicación, ¿sientes que tartamudeas menos o tienes menos dificultad para encontrar las palabras correctas al hablar con gente nueva?', key: "pregunta_14", with: 50}
        ]
        // Add registers to the questionnaire post social sheet
        questionnairePostSocialResponses.forEach(item => {
            worksheetPostSocial.addRow(item)
        })

        // Create questionnaire pre interview sheet
        const worksheetPreInterview = workbook.addWorksheet("Cuestionario entrevista_AA")
        worksheetPreInterview.columns = [
            {header: "ID registro", key: "id", width: 20 },
            {header: "Fecha de creacion", key: "fecha_creacion", width: 30},
            {header: 'Antes de responder una pregunta en una entrevista, ¿te preocupa decir algo incorrecto?', key: "pregunta_1", with: 100},
            {header: 'Durante la entrevista, ¿te preocupa constantemente que el entrevistador te esté juzgando negativamente?', key: "pregunta_2", with: 200},
            {header: 'Durante la entrevista, ¿piensas que no eres lo suficientemente bueno para la posición?', key: "pregunta_3", with: 250},
            {header: 'Antes de una entrevista laboral, ¿a menudo piensas en cancelar o evitar la entrevista por miedo o sentirte muy ansioso?', key: "pregunta_4", with: 50},
            {header: 'Después de una entrevista, ¿tiendes a repasar mentalmente todas las respuestas que diste y a criticarte por los errores?', key: "pregunta_5", with: 50},
            {header: 'Durante una entrevista laboral, ¿sientes que tu corazón late con mayor intensidad?', key: "pregunta_6", with: 50},
            {header: '¿Sientes que tus manos o frente comienzan a sudar cuando estás en una entrevista laboral?', key: "pregunta_7", with: 50},
            {header: 'Durante una entrevista, ¿notas que tu voz suena tensa o temblorosa cuando hablas?', key: "pregunta_8", with: 50},
            {header: '¿Sientes que tus músculos se tensan cuando estás siendo entrevistado/a?', key: "pregunta_9", with: 50},
            {header: 'Mientras estás siendo entrevistado/a, ¿tiendes a cruzar los brazos o adoptar una postura cerrada para sentirme más seguro/a?', key: "pregunta_10", with: 50},
            {header: 'Durante una entrevista, ¿te cuesta mantener el contacto visual con el entrevistador?', key: "pregunta_11", with: 50},
            {header: 'Durante la entrevista, ¿tiendes a jugar tus manos, morderte los labios o hacer movimientos repetitivos para lidiar con la ansiedad?', key: "pregunta_12", with: 50},
            {header: '¿Qué tan a menudo recurres a comportamientos de evitación, como revisar el celular o mirar hacia otro lado, cuando estás en la entrevista laboral?', key: "pregunta_13", with: 50},
            {header: 'Cuando te hacen una pregunta difícil, ¿intentas cambiar de tema o desviar la conversación durante la entrevista?', key: "pregunta_14", with: 50}
        ]
        // Add registers to the questionnaire pre interview sheet
        questionnairePreInterviewResponses.forEach(item => {
            worksheetPreInterview.addRow(item)
        })

        // Create questionnaire post interview sheet
        const worksheetPostInterview = workbook.addWorksheet("Cuestionario entrevista_DA")
        worksheetPostInterview.columns = [
            {header: "ID registro", key: "id", width: 20 },
            {header: "Fecha de creacion", key: "fecha_creacion", width: 30},
            {header: 'Después de usar la aplicación, ¿te preocupa menos decir algo incorrecto antes de responder una pregunta en una entrevista?', key: "pregunta_1", with: 100},
            {header: 'Sientes que, tras usar la aplicación, ¿te preocupa menos que el entrevistador te esté juzgando negativamente durante la entrevista?', key: "pregunta_2", with: 200},
            {header: 'Después de usar la aplicación, ¿te sientes más seguro/a y piensas menos que no eres lo suficientemente bueno/a para la posición?', key: "pregunta_3", with: 250},
            {header: 'Tras utilizar la aplicación, ¿piensas menos en cancelar o evitar la entrevista por miedo o ansiedad?', key: "pregunta_4", with: 50},
            {header: 'Después de usar la aplicación, ¿tiendes a repasar menos mentalmente las respuestas que diste y a criticarte menos por posibles errores?', key: "pregunta_5", with: 50},
            {header: '¿Sientes que tu corazón late con menos intensidad durante una entrevista laboral después de usar la aplicación?', key: "pregunta_6", with: 50},
            {header: '¿Notas que tus manos o frente sudan menos durante una entrevista laboral después de usar la aplicación?', key: "pregunta_7", with: 50},
            {header: 'Después de usar la aplicación, ¿sientes que tu voz suena menos tensa o temblorosa cuando hablas durante una entrevista?', key: "pregunta_8", with: 50},
            {header: '¿Sientes que tus músculos se tensan menos cuando estás siendo entrevistado/a tras usar la aplicación?', key: "pregunta_9", with: 50},
            {header: 'Después de usar la aplicación, ¿tiendes a cruzar menos los brazos o adoptar una postura cerrada durante una entrevista laboral?', key: "pregunta_10", with: 50},
            {header: '¿Te resulta más fácil mantener el contacto visual con el entrevistador después de haber usado la aplicación?', key: "pregunta_11", with: 50},
            {header: '¿Notas que juegas menos con tus manos, te muerdes menos los labios o haces menos movimientos repetitivos durante la entrevista después de usar la aplicación?', key: "pregunta_12", with: 50},
            {header: 'Tras el uso de la aplicación, ¿recurres menos a comportamientos de evitación, como revisar el celular o mirar hacia otro lado, durante la entrevista laboral?', key: "pregunta_13", with: 50},
            {header: '¿Sientes que, después de usar la aplicación, intentas menos desviar la conversación o cambiar de tema cuando te hacen una pregunta difícil en una entrevista?', key: "pregunta_14", with: 50}
        ]
        // Add registers to the questionnaire post interview sheet
        questionnairePostInterviewResponses.forEach(item => {
            worksheetPostInterview.addRow(item)
        })

        
        // Save file
        await workbook.xlsx.writeFile("Datos.xlsx")
        try{
            // Send email
            await sendEmailWithFile(userInfo[0], body)
        }
        catch(error){
            console.log(error)
        }
    }

}

export default EmailService