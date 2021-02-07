import React from "react";
import {Payment} from "./Payment";

export const RecurringPayments = ({payments, refreshPayments}) => (
    <div id="payments">
        {payments.map(t  => <Payment
            key={t.id} payment={t}
            refreshPayments={refreshPayments}/>)}
    </div>
);
