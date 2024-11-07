import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Forbidden from '../pages/Forbidden/Forbidden'

interface IPrivateRoute{
    component: ReactNode,
}

const PrivateRoute = ({ component }:IPrivateRoute) => {
    //FILL HERE 3.6
    const { index } = useParams()
    const floorIndex = Number(index) | 0
    const floorAccess = useSelector(
        (state: { floorAccess: { floorAccess: [boolean, boolean, boolean, boolean, boolean] } }) => state.floorAccess.floorAccess
      )
    return floorAccess[floorIndex] ? component : <Forbidden/>
};

export default PrivateRoute