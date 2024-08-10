import { ThirdwebProvider, ConnectButton, useActiveAccount, useWalletBalance } from "thirdweb/react";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";
import WalletInfo from "./walletInfo";
import FileUploadButton from "./fileUpload";

function App() {

  return (
    <ThirdwebProvider>
      <div>
        <ConnectButton 
        client={client} 
        chain={sepolia}
        />
      </div>

      <WalletInfo client={client} chain={sepolia} />

      <FileUploadButton/>
    </ThirdwebProvider>
  );
}

export default App;
