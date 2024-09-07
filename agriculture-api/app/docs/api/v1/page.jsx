import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
const spec = '/openapi/agriculture-api.json'

export default async function page(){
    return (<SwaggerUI url={spec} displayOperationId={true} layout="BaseLayout" />)
}