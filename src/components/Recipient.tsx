import { IonInput, IonItem, IonLabel } from '@ionic/react'
import React, { useState } from 'react'

function Recipient() {
    const [recipient, setRecipient] = useState<string>();
    const [recipientIban, setRecipientIban] = useState<string>();
    return (
        <>
            <IonItem>
                <IonLabel position="stacked">Recipient:</IonLabel>
                <IonInput value={recipient} type="text" min={4} placeholder='Payee' onIonChange={e => setRecipient(e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Recipient IBAN:</IonLabel>
                <IonInput value={recipientIban} type="text" placeholder='IBAN/account number' onIonChange={e => setRecipientIban(e.detail.value!)} />
            </IonItem>
        </>
    )
}

export default Recipient;