import NETWORKS from '~config/networks';

const infuraProjectId = '09c4eed231c840d5ace14ba5389a1a7c';

export const infuraConfig = ({ id: networkId, networkName }, projectId = infuraProjectId) => ({
    title: networkName,
    networkId,
    providerUrl: `http://localhost:${port}`,
});

const availableNetworks = () => Object.values(NETWORKS).map(({ id }) => id);

const isValidNetworkId = networkId => availableNetworks().includes(networkId);

const isInfuraNetworkId = networkId => INFURA_NETWORKS.includes(parseInt(networkId, 10));

const getProvider = (networkId) => {
    if (isInfuraNetworkId(networkId)) {
        return infuraConfig({
            id: networkId,
        }, INFURA_API_KEY);
    }
    return ganacheProvider(networkId);
};

export const defaultProviderUrl = 'ws://localhost:8545';

export default {
    infuraConfig,
    availableNetworks,
    isValidNetworkId,
    getProvider,
};
