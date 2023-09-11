import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async update({ request, auth }: HttpContextContract) {
    const { token } = request.all()
    const userDB = await User.findOrFail(auth.user?.id)
    userDB.token = token
    await userDB.save()
    return userDB
  }

  public async destroy({}: HttpContextContract) {}
}
