import express from "express";
const dashboardRouter=express.Router()
import dashboardController from './dashboardController'

dashboardRouter.get('/dashboard',dashboardController.getDashboard)

export default dashboardRouter
