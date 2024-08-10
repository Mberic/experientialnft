import { useActiveAccount, useWalletBalance } from "thirdweb/react";

export default function WalletInfo({ client, chain }) {
  const account = useActiveAccount();

  // Check if an account is active before using useWalletBalance
  const { data: balance, isLoading } = useWalletBalance({
    client,
    chain,
    address: account?.address, // Use optional chaining to avoid errors if account is null
  });

  // Return null or an appropriate message if no account is connected
  if (!account) {
    return <p>No wallet connected</p>;
  }

  return (
    <div>
      <p>Wallet address: {account.address}</p>
      <p>
        Wallet balance: {isLoading ? "Loading..." : `${balance?.displayValue} ${balance?.symbol}`}
      </p>
    </div>
  );
}
