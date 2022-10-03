import { IonInput, IonItem, IonLabel } from '@ionic/react'
import React, { useState } from 'react'

function Owner() {
    const [owner, setOwner] = useState<string>("Harmath Ádám");
    const [ownerIban, setOwnerIban] = useState<string>("HU42 1117 3875 0564 1234 0000 0000");
    return (
        <>
            <IonItem>
                <IonLabel position="stacked">From:</IonLabel>
                <IonInput value={owner} type='text' minlength={4} placeholder='Sender' onIonChange={e => setOwner(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Owner IBAN:</IonLabel>
              <IonInput value={ownerIban} type='text' placeholder='IBAN/account number' onIonChange={e => setOwnerIban(e.detail.value!)} />
            </IonItem>
        </>
    )
}

export default Owner;