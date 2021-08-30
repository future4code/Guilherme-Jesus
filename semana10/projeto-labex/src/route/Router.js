import React from "react"
import { AdminHomePage } from "../pages/AdminHomePage"
import { CreateTripsPage } from "../pages/CreateTripsPage"
import { HomePage } from "../pages/HomePage";
import { ListTripsPage } from "../pages/ListTripsPage";
import { LoginPage } from "../pages/LoginPage";
import { TripDetailsPage } from "../pages/TripDetailsPage";
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";


export const Router = () =>{
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={'/'}>
          <HomePage />
        </Route>

        <Route exact path={'/trips/list'}>
          <ListTripsPage />
        </Route>

        <Route exact path={'/trips/application'}>
          <ApplicationFormPage />
        </Route>
        
        <Route exact path={'/login'}>
          <LoginPage />
        </Route>

        <Route exact path={'/admin/trips/list'}>
          <AdminHomePage />
        </Route>
        
        <Route exact path={'/admin/trips/create'}>
        <CreateTripsPage/>
        </Route>

        <Route exact path={'/admin/trips/:id'}>
        <TripDetailsPage/>
        </Route>

      </Switch>
    </BrowserRouter>

  );
}

