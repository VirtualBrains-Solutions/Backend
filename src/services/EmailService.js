import EmailRepository from "../repositories/EmailRepository.js"
import QuestionnaireRepository from "../repositories/QuestionnaireRepository.js"
import FeedbackRepository from "../repositories/FeedbackRepository.js"
import SuggestRepository from "../repositories/SuggestRepository.js"
import PlansRepository from "../repositories/PlansRepository.js"
import GoalsRepository from "../repositories/GoalsRepository.js"

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
    }
    async getQuestionnarieData(id){
        const [
                questionnaireGeneralResponses,
                questionnairePreSocialResponses,
                questionnairePreInterviewResponses,
                questionnairePostSocialResponses,
                questionnairePostInterviewResponses
        ]
        = await Promise.all([
            this.questionnaireRepository.getQuestionnarieGeneralAnswersByUserIdRepo(id),
            this.questionnaireRepository.getQuestionnariePreSocialAnswersByUserIdRepo(id),
            this.questionnaireRepository.getQuestionnariePreInterviewAnswersByUserIdRepo(id),
            this.questionnaireRepository.getQuestionnariePostSocialAnswersByUserIdRepo(id),
            this.questionnaireRepository.getQuestionnariePostInterviewAnswersByUserIdRepo(id)
        ])
        return [questionnaireGeneralResponses,
            questionnairePreSocialResponses,
            questionnairePreInterviewResponses,
            questionnairePostSocialResponses,
            questionnairePostInterviewResponses]
    }
    async sendEmail(id){
        // Get data
        const [
            questionnaireGeneralResponses,
            questionnairePreSocialResponses,
            questionnairePreInterviewResponses,
            questionnairePostSocialResponses,
            questionnairePostInterviewResponses
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
        
        // Save file
        await workbook.xlsx.writeFile("Datos.xlsx")

        // Send email
        await sendEmailWithFile("paocisneros09@hotmail.com")
    }

}

export default EmailService