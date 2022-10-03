import { IonItem, IonLabel, IonInput, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonCardHeader, IonButton, IonCard, useIonToast, IonCheckbox, IonRadio, IonContent, IonList, IonRadioGroup, IonListHeader } from '@ionic/react';
import { useState } from 'react';
import BankTransaction from '../components/BankTransaction';
import HomeFormStyle from './Home.module.css';

const Home: React.FC = () => {
  const [presentToast] = useIonToast();
  const [owner, setOwner] = useState<string>("Harmath Ádám");
  const [ownerIban, setOwnerIban] = useState<string>("HU42 1117 3875 0564 1234 0000 0000");
  const [recipient, setRecipient] = useState<string>();
  const [recipientIban, setRecipientIban] = useState<string>();
  const [amount, setAmount] = useState<string>();
  const [execution, setExecution] = useState<string>("standard");
  const [reference, setReference] = useState<string>();
  return (
    <IonPage className={HomeFormStyle.formPage}>
      <IonHeader>
            <IonToolbar>
                <IonTitle>Bank transaction</IonTitle>
            </IonToolbar>
        </IonHeader>
      <IonContent scrollEvents={true}
        onIonScrollStart={() => { }}
        onIonScroll={() => { }}
        onIonScrollEnd={() => { }}>
        <IonCard className={HomeFormStyle.formCard}>
          <IonCardHeader className={HomeFormStyle.formCardHeader}>
            <h1>New transaction</h1>
          </IonCardHeader>
          <IonCardContent >
            <IonItem>
              <IonLabel position="stacked">From:</IonLabel>
              <IonInput value={owner} type='text' minlength={4} placeholder='Sender' onIonChange={e => setOwner(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Owner IBAN:</IonLabel>
              <IonInput value={ownerIban} type='text' placeholder='IBAN/account number' onIonChange={e => setOwnerIban(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Recipient:</IonLabel>
              <IonInput value={recipient} type="text" min={4} placeholder='Payee' onIonChange={e => setRecipient(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Recipient IBAN:</IonLabel>
              <IonInput value={recipientIban} type="text" placeholder='IBAN/account number' onIonChange={e => setRecipientIban(e.detail.value!)} />
            </IonItem>
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
            <IonItem>
              <IonLabel position="stacked">Amount:</IonLabel>
              <IonInput value={amount} type="text" placeholder='0' onIonChange={e => setAmount(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Payment reference:</IonLabel>
              <IonInput value={reference} type="text" placeholder='Max 35 characters' maxlength={35} onIonChange={e => setReference(e.detail.value!)} />
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
        <IonButton onClick={() => {
          presentToast({
            message: `{
            "owner":${owner}
            "ownerIban":${ownerIban}
            "recipient":${recipient}
            "recipientIban":${recipientIban}
            "amount":${amount}
            "execution":${execution}
            "reference":${reference}
          }`,
            duration: 8000,
            cssClass: 'custom-toast',
            buttons: [
              {
                text: 'Dismiss',
                role: 'cancel'
              }
            ],
          });
          setRecipient("");
          setRecipientIban("");
          setExecution("")
          setReference("")
          setAmount("")
        }}>
          Send
        </IonButton>
    </IonPage>
  );
};

export default Home;

