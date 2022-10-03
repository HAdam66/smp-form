import { IonItem, IonLabel, IonRadio, IonRadioGroup } from '@ionic/react'
import React, { useState } from 'react'
import HomeFormStyle from './Home.module.css';

function Execution() {
    const [execution, setExecution] = useState<string>("standard");
    return (
        <IonItem>
            <IonLabel position="stacked">
                Type of execution:
            </IonLabel>
            <br></br>
            <IonRadioGroup value={execution} onIonChange={e => setExecution(e.detail.value)}>
                <IonItem className={HomeFormStyle.formRadio}>
                    <IonItem>
                        <IonLabel>Standard</IonLabel>
                        <IonRadio value="standard" />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Urgent</IonLabel>
                        <IonRadio value="urgent" />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Instant Payment</IonLabel>
                        <IonRadio value="instant payment" />
                    </IonItem>
                </IonItem>
            </IonRadioGroup>
        </IonItem>
    )
}

export default Execution