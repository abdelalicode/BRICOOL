import React from "react";
import "../../src/App.css";

export default function Transactions({ transactions, loading }) {
    if (loading) {
        return (
            <div className="m-48">
                <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
                    <circle
                        class="pl__ring pl__ring--a"
                        cx="120"
                        cy="120"
                        r="105"
                        fill="none"
                        stroke="#000"
                        stroke-width="20"
                        stroke-dasharray="0 660"
                        stroke-dashoffset="-330"
                        stroke-linecap="round"
                    ></circle>
                    <circle
                        class="pl__ring pl__ring--b"
                        cx="120"
                        cy="120"
                        r="35"
                        fill="none"
                        stroke="#000"
                        stroke-width="20"
                        stroke-dasharray="0 220"
                        stroke-dashoffset="-110"
                        stroke-linecap="round"
                    ></circle>
                    <circle
                        class="pl__ring pl__ring--c"
                        cx="85"
                        cy="120"
                        r="70"
                        fill="none"
                        stroke="#000"
                        stroke-width="20"
                        stroke-dasharray="0 440"
                        stroke-linecap="round"
                    ></circle>
                    <circle
                        class="pl__ring pl__ring--d"
                        cx="155"
                        cy="120"
                        r="70"
                        fill="none"
                        stroke="#000"
                        stroke-width="20"
                        stroke-dasharray="0 440"
                        stroke-linecap="round"
                    ></circle>
                </svg>
            </div>
        );
    }
    return (
        <div className="m-24">
            <h1 className="m-6 text-4xl font-bold mb-12">My Sent Transactions</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2">
            {transactions.sentTransactions[0] === "No transactions available" ? (
                    <h3>No transactions available</h3>
                ) : (
                transactions.sentTransactions.map((transaction) => (
                    <div className="card-container mb-12" key={transaction.id}>
                        <div className="card" >
                            <div className="front-content">
                                
                                <p>
                                    <div className="text-sm font-medium"> - Receiver</div>
                                    {transaction.receiver_wallet.user.firstname}{" "}
                                    {transaction.receiver_wallet.user.lastname}
                                </p>
                            </div>
                            <div className="content">
                                <p>
                                Amount: 
                                </p>
                                <p className="heading">
                                    {transaction.amount} {"DH"}
                                </p>
                                <p>
                                    You send it at :{" "}
                                    {new Date(transaction.created_at).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                )))}
            </div>


            <h1 className="m-6 text-4xl font-bold mb-12">My Received Transactions</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2">
            {transactions.receivedTransactions[0] === "No transactions available" ? (
                    <h3>No transactions available</h3>
                ) : (
                transactions.receivedTransactions.map((transaction) => (
                    <div className="card-container mb-12">
                        <div className="card" key={transaction.id}>
                            <div className="front-content">
                                
                                <p>
                                    <div className="text-sm font-medium"> - Sender</div>
                                    {transaction.sender_wallet.user.firstname}{" "}
                                    {transaction.sender_wallet.user.lastname}
                                </p>
                            </div>
                            <div className="content">
                                <p>
                                Amount: 
                                </p>
                                <p className="heading">
                                    {transaction.amount} {"DH"}
                                </p>
                                <p>
                                    You received it at :{" "}
                                    {new Date(transaction.created_at).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                )))}
            </div>
        </div>
    );
}
