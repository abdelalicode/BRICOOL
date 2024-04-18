import React from "react";

export default function AdminHome({ transactions, loading }) {
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
        <div className="p-24">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            SENDER FULL NAME
                        </th>
                        <th scope="col" class="px-6 py-3">
                            RECEIVER FULL NAME
                        </th>
                        <th scope="col" class="px-6 py-3">
                            AMOUNT
                        </th>
                        <th scope="col" class="px-6 py-3">
                            DATE OF TRANSACTION
                        </th>
                    </tr>
                </thead>
                <tbody className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    {transactions.sentTransactions &&
                    transactions.sentTransactions.length > 0 ? (
                        transactions.sentTransactions.map(
                            (sentTransaction, index) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                            <th
                                                scope="row"
                                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {sentTransaction.sender_wallet.user.firstname} {sentTransaction.sender_wallet.user.lastname}
                                            </th>
                                            <td class="px-6 py-4">{sentTransaction.receiver_wallet.user.firstname} {sentTransaction.receiver_wallet.user.lastname}</td>
                                            <td class="px-6 py-4">{sentTransaction.amount}</td>
                                            <td class="px-6 py-4">{new Date(sentTransaction.created_at).toLocaleString()}</td>
                                        </tr>
                            )
                        )
                    ) : (
                        <p>No sent transactions available</p>
                    )}
                </tbody>
            </table>
        </div>
    );
}
