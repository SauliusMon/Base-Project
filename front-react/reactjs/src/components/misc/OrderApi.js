import axios from 'axios'
import { config } from '../../Constants'
import { parseJwt } from './Helpers'

export const orderApi = {
  authenticate,
  signup,
  getAllUsers,
  getUsersFilteredByUsername,
  deleteUser,

  getMechanics,
  deleteMechanic,
  createNewMechanic,
  acceptOrder,

  getMechanicByID,
  updateExistingMechanic,

  getMechanicsWorkplaces,
  deleteMechanicWorkplace,
  createNewMechanicWorkplace,

  getMechanicWorkplaceByID,
  updateExistingMechanicWorkplace,

  updateExistingMechaniRating
}

function authenticate(username, password) {
  return instance.post('/auth/authenticate', { username, password }, {
    headers: { 'Content-type': 'application/json' }
  })
}

function signup(user) {
  return instance.post('/auth/signup', user, {
    headers: { 'Content-type': 'application/json' }
  })
}


function getAllUsers(user) {
  return instance.get('/api/v1/users/get-users', {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function getUsersFilteredByUsername(user, username) {
  if (username === '' || username.trim().length === 0) {
    return getAllUsers(user);
  }
  return instance.get(`/api/v1/users/get-users-by-username/${username}`, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function deleteUser(user, username) {
  //Cant delete yourself
  return instance.delete(`/api/v1/users/delete-user/${username}`, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}


function createNewMechanic(user, mechanic) {
  return instance.post('/api/v1/mechanic/create-mechanic', mechanic, {
    headers: {
      Authorization: bearerAuth(user),
    },
  });
}

function getMechanics(user) {
  return instance.get(`/api/v1/mechanic/get-mechanics`, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function deleteMechanic(user, mechanicID) {
  return instance.delete(`/api/v1/mechanic/delete-mechanic`, {
    params: {
      mechanicID: mechanicID
    },
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function acceptOrder(user, orderID) {
  return instance.put(`/api/v1/order/accept-order`, null, {
    params: {
      orderID: orderID
    },
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function getMechanicByID(user, mechanicID) {
  return instance.get(`/api/v1/mechanic/get-mechanic`, {
    params: {
      mechanicID: mechanicID
    },
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function updateExistingMechanic(user, mechanicWorkplace) {
  return instance.put('/api/v1/mechanic/update-mechanic', mechanicWorkplace, {
    headers: {
      Authorization: bearerAuth(user),
    },
  });
}


function getMechanicsWorkplaces(user) {
  return instance.get(`/api/v1/workplace/get-mechanic-workplaces`, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function deleteMechanicWorkplace(user, mechanicWorkplaceID) {
  return instance.delete(`/api/v1/workplace/delete-mechanic-workplace`, {
    params: {
      mechanicWorkplaceID: mechanicWorkplaceID
    },
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function createNewMechanicWorkplace(user, mechanic) {
  return instance.post('/api/v1/workplace/create-mechanic-workplace', mechanic, {
    headers: {
      Authorization: bearerAuth(user),
    },
  });
}

function getMechanicWorkplaceByID(user, mechanicWorkplaceID) {
  return instance.get(`/api/v1/workplace/get-mechanic-workplace`, {
    params: {
      mechanicWorkplaceID: mechanicWorkplaceID
    },
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function updateExistingMechanicWorkplace(user, mechanicWorkplace) {
  return instance.put('/api/v1/workplace/update-mechanic-workplace', mechanicWorkplace, {
    headers: {
      Authorization: bearerAuth(user),
    },
  });
}

function updateExistingMechaniRating (user, mechanicID, mechanicRanking) {
  return instance.put('/api/v1/mechanic/rate-mechanic', {
    params: {
      mechanicID: mechanicID,
      mechanicRanking: String(mechanicRanking)
    },
    headers: { 'Authorization': bearerAuth(user) }
  })
}

const instance = axios.create({
  //Setups base url with localhost:8080
  baseURL: config.url.API_BASE_URL
})

instance.interceptors.request.use(function (config) {
  // If token is expired, redirect user to login
  if (config.headers.Authorization) {
    const token = config.headers.Authorization.split(' ')[1]
    const data = parseJwt(token)
    if (Date.now() > data.exp * 1000) {
      window.location.href = "/login"
    }
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// -- Helper functions

function bearerAuth(user) {
  return `Bearer ${user.accessToken}`
}