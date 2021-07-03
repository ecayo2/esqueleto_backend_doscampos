const RegistroForm = require('./registroForm.model');

const crearRegistroFormDB = async (registroForm) => {
    let respuesta = await RegistroForm.create(registroForm);
    return respuesta;
}