/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import HeaderText from "../HeaderText";

export const agreements: string[] = [
  "The Client confirms that he/she has read, understood and accepted all information, conditions and terms set out on Website which are open to be reviewed and can be examined by the public and which include important legal Information.",
  "By accepting this Agreement, the Client agrees and irrevocably accepts the terms and conditions contained in this Agreement, its annexes and/or appendices as well as other documentation/information published on the Website, including without limitation to the Privacy Policy, Payment Policy, Withdrawal & Refund Policy, Code of Conduct, Order Execution Policy and Anti-Money Laundering Policy. The Client accepts this Agreement by registering an Account on the Website and depositing funds. By accepting the Agreement, and subject to the Company’s final approval, the client enters into a legal and binding agreement with the Company.",
  "The terms of this Agreement shall be considered accepted unconditionally by the Client upon the Company’s receipt of an advance payment made by the Client. As soon as the Company receives the Client’s advance payment, every operation made by the Client on the investments Platform shall be subject to the terms of this Agreement and other documentation/information on the Website.",
  "The Client hereby acknowledges that each and any Operation, activity, transaction, order and/or communication performed by him/her on the investments Platform, including without limitation through the Account, and the Website, shall be governed by and/or must be executed in accordance to, the terms and conditions of this Agreement and other documentation/information on the Website.",
  "By accepting this current agreement, the Client confirms that he/she is able to receive information, including amendments to the present Agreement either via email or through the Website.",
];

export const terms = [
  {
    title: "terms",
    terms: [
      "Account – means unique personified account registered in the name of the Client and which contains all of the Client’s transactions/ operations on the investments Platform (as defined below) of the Company.",
      "Ask – means the higher price in a quote. The price the Client may buy at. Investors are entitled to purchase company shares for the minimum of $20000",
      "Bid – means the lower price in a quote. compounding of investment is only allowed from the second plan The price the Client may sell at. ",
      "Classic Options – means CFDs on stock options.",
      "CFD (contract for difference) – means a tradeable contract entered into between the Client and the Company, who exchange the difference in the value of an Instrument, as specified on the investments Platform at the time of opening a Transaction, and the value of that Instrument at the contract’s end, also no is allowed to invest below your last deposit.",
      "Digital Option Contract – means a type of derivative instrument where the Client earns a payout if they correctly predict the price movement of the underlying asset at the time of the option’s expiry. The prediction can be made as to whether the value of the underlying asset will fall above or below the strike price at time of expiration. Should the option expire at the selected strike price, it will be considered to expire out-of-the money and will result in the loss of the invested amount.",
      "Execution – means the execution of Client order(s) by the Company acting as the Client’s counter party as per the terms of the present agreement. The company operates on automatic withdrawal which manual or forceful withdrawal is prohibited",
      "Notification of changes – Terms and conditions agreement will charge as you learn more about your market and encounter new issues. This is common with all developers and users  generally expect it. We reserve the right to change the rules, commissions and rate of the program at any time and our sole discretion without notice, especially in order to respect the integrity and security of the members interests. You agree that it is your sole responsibility to review the current terms.  This simply means users would receive notification.",
      "Termination – Dropbox adopted a general approach to terminating accounts. It explain that users may stop using service at anytime and a violation of T&C results in account termination. In no way will you interfere with the proper operation of the platform by performing any actions that could adversely affect of the operation or reputation of Blueledge asset partners. You are responsible for taking appropriate measures to ensure that you comply with all laws of your country of residence, including applicable tax laws. You agree to pay in full all amounts payable including any additional costs established by the platform; You are responsible including recognizing a potential complete loss of funds, for any erroneous transaction made inside or outside Blueledge asset partners, due to your fault/inattention  ",
      "Multiple Account – it is strictly prohibited to register multiple account in your team. you agree that you will not distribute spam using the site name for any commercial purposes or activities aimed at personal profit which bypasses the general goal and benefit of the platform user.",
      " The Client confirms that he/she has read, understood and accepted all information, conditions and terms set out on Website which are open to be reviewed and can be examined by the public and which include important legal Information.",
      " By accepting this Agreement, the Client agrees and irrevocably accepts the terms and conditions contained in this Agreement, its annexes and/or appendices as well as other documentation/information published on the Website, including without limitation to the Privacy Policy, Payment Policy, Withdrawal and Order Execution Policy and Anti-Money Laundering Policy. The Client accepts this Agreement by registering an Account on the Website and depositing funds. By accepting the Agreement, and subject to the Company’s final approval, the Client enters into a legal and binding agreement with the Company.",
      " The terms of this Agreement shall be considered accepted unconditionally by the Client upon the Company’s receipt of an advance payment made by the Client. As soon as the Company receives the Client’s advance payment, every operation made by the Client on the investments Platform shall be subject to the terms of this Agreement and other documentation/information on the Website.",
      "The Client hereby acknowledges that each and any Operation, activity, transaction, order and/or communication performed by him/her on the investments Platform, including without limitation through the Account, and the Website, shall be governed by and/or must be executed in accordance to, the terms and conditions of this Agreement and other documentation/information on the Website.",
      " By accepting this current agreement, the Client confirms that he/she is able to receive information, including amendments to the present Agreement either via email or through the Website. Aggressive behavior, rudness, threats or provocation against the platform developers, employees and other users is not allowed. Don’t post bad vote on public forms and at gold rating site without contacting the administrator of our program first. Maybe there was a technical problem with your transaction, so please always clear the things with the administrator",
      "A client that is a legal entity can register with the Company not through any other means but through the registration button below each plan , the Bronze matrix plan run an IPV4 network and do not support multiple investment. All terms and conditions contained herein, including without limitation to 1 to 5 above, shall at all times be applicable to the Legal Entity and the latter shall conform with such terms and conditions, obligations and rights at all times. It is advised the an investor should upgrade to Silver matrix plan or Gold matrix plan which runs on IPV6 after the second reinvestment to avoid system delay and unnecessary propagation from our mining server which as a result can withheld your profit.",
    ],
  },
  {
    title: " Subject of the Agreement",
    terms: [
      "The subject of the Agreement shall be the provision of Services to the Client by the Company under the Agreement and through the investments Platform.",
      "The Company shall carry out all transactions as provided in this Agreement on an execution-only basis, neither managing the account nor advising the Client. The Company is entitled to execute transactions requested by the Client as provided in this Agreement even if the transaction is not beneficial for the Client. The Company is under no obligation, unless otherwise agreed in this Agreement and/or other documentation/information on the Website,to monitor or advise the Client on the status of any transaction, to make margin calls, or to close out any of the Client’s open positions. Unless otherwise specifically agreed, the Company is not obligated to make an attempt to execute the Client’s order using quotes more favorable than those offered through the investments Platform.",
      "The Investment and Ancillary Services which the Company should provide under the terms of the Agreement are stated below, and the Company will provide them in its capacity as a market maker under the terms of this Agreement. The Services that the Company provides in relation to one or more Financial Instruments are the following (the list below shall not be regarded as exhaustive.",
    ],
  },
];

const TermsAndCondiition = () => {
  return (
    <div className="flex flex-col mt-[5rem]">
      <HeaderText textClassname="text-secondary-1 font-bold mb-[2rem] text-center">
        Terms and Condition
      </HeaderText>
      <p>
        This Agreement is entered into by and these Terms & Conditions
        (hereinafter referred to as the “Agreement”) shall regulate the
        relationship between Blueledge asset partners and the user (a natural or
        legal entity).
      </p>

      <ol className="list-upperAlpha px-[3rem] my-[1.5rem]" type="A">
        {agreements.map((agreement: string) => (
          <li key={agreement} className=" list-item mb-[1.5rem]">
            <p>{agreement}</p>
          </li>
        ))}
      </ol>

      <div className="mt-[4rem]">
        <p>
          All terms and and conditions contained herein, including without
          limitation, shall at all times be applicable to the Legal Entity and
          the latter shall conform with such terms and conditions, obligations
          and rights at all times.
        </p>
        <ol className="list-upperAlpha px-[3rem] my-[1.5rem]">
          {terms.map((item: any, i: number) => (
            <li key={i} className="list-item">
              <p className="capitalize">{item.title}</p>
              <ol className="list-lowerAlpha mx-[2rem] my-[1.5rem]">
                {item.terms.map((term: string) => (
                  <li key={term} className="list-item mb-[1.5rem]">
                    {term}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TermsAndCondiition;
