/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const notFound = (req, res, next) => {
    // כאשר שולחים פרמטר לנקסט
    // עוברים אוטומטית למידלוואר של השגיאות
    next({ message: 'url not found!', status: 404 });
}
/**
 * @param {{ message?:string, status?: number }} err
 * @param {Request} req 
 * @param {Response} res 
 * @param {() => void} next 
 */
export const errorHandler = (err, req, res, next) => {
   res.status(err.status||500).json({err:(err.message||'Server Error')+'1111111111'})
}