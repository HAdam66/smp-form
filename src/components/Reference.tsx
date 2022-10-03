import { IonInput, IonItem, IonLabel } from '@ionic/react'
import React, { useState } from 'react'

function Reference() {
    const [reference, setReference] = useState<string>();
    return (
        <IonItem>
            <IonLabel position="stacked">Payment reference:</IonLabel>
            <IonInput value={reference} type="text" placeholder='Max 35 characters' maxlength={35} onIonChange={e => setReference(e.detail.value!)} />
        </IonItem>
    )
}

export default Reference