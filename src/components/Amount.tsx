import { IonInput, IonItem, IonLabel } from '@ionic/react'
import React, { useState } from 'react'

function Amount() {
    const [amount, setAmount] = useState<string>();
    return (
        <IonItem>
            <IonLabel position="stacked">Amount:</IonLabel>
            <IonInput value={amount} type="text" placeholder='0' onIonChange={e => setAmount(e.detail.value!)} />
        </IonItem>
    )
}

export default Amount;