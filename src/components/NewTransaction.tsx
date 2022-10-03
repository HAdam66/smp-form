import { IonCardHeader } from '@ionic/react'
import React from 'react'
import HomeFormStyle from './Home.module.css';

function NewTransaction() {
    return (
        <IonCardHeader className={HomeFormStyle.formCardHeader}>
            <h1>New transaction</h1>
        </IonCardHeader>
    )
}

export default NewTransaction