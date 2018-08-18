import User from '../models/user'

import {formatResponse, formatError} from '../api'

class UserCtrl {
    setUserAddresses (req, res) {
        const user = new User({
          location: req.body.location,
          university: req.body.university,
        })

        user.save()
            .then(savedUser => {
                res.json(formatResponse({
                    message: 'User details saved successfully'
                }))
            })
            .catch(err => {
                res.json(formatError(err.message))
            })
    }
}

let userCtrl = new UserCtrl()
export default userCtrl
