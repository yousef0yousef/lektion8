import { useState, useEffect } from "react"

function ATM({ money, setmoney, balance, setBalance }) {

    const [firstRender, setFirstRender] = useState(true)

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false)
            return
        }
        console.log(`Saldo has been updated! New saldo is ${balance} SEK`)

    }, [balance])

    function addMoney(e) {
        e.preventDefault();

        if (money === "" || Number(money) <= 0 || Number(money) > 500) {
            console.log("Please select amount");
            return;
        }
        setBalance(prevBalance => prevBalance + money)
    }

    function removeMoney() {
        if (money === "" || Number(money) <= 0 || Number(money) > 500) {
            console.log("Please select amount");
            return;
        }

        if (Number(money) > balance) {
            console.log("Insufficient funds");
            return;
        }
        setBalance(prevBalance => prevBalance - money)
    }

    return (
        <>
            <h1>ATM</h1>
            <h2>Saldo: {balance}</h2>

            <div>
                <button type="button" onClick={() => setmoney(100)}>100</button>
                <button type="button" onClick={() => setmoney(200)}>200</button>
                <button type="button" onClick={() => setmoney(500)}>500</button>
            </div>

            <form onSubmit={addMoney}>
                <label htmlFor="summa"></label>
                <input type="number" value={money} readOnly onChange={(e) => setmoney(e.target.value)} />
                <input type="submit" value={"Sätt in"} />
                <button type="button" onClick={removeMoney}>Ta ut</button>
            </form>
        </>
    )
}

export default ATM