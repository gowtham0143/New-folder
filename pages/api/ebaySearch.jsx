import axios from 'axios';

export default async function handler(req, res) {
    const clientId = process.env.EBAY_CLIENT_ID;
    const clientSecret = process.env.EBAY_CLIENT_SECRET;

    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const responseData = await axios.post(
        'https://api.ebay.com/identity/v1/oauth2/token',
        'grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope',
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${auth}`,
            },
        }
    );

    const { access_token } = responseData.data;

    try {
        const { q } = req.body;
        const token = access_token;

        const response = await axios.get(`https://api.ebay.com/buy/browse/v1/item_summary/search?q=${q}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'X-EBAY-C-MARKETPLACE-ID': 'EBAY_UK',
                'X-EBAY-C-ENDUSERCTX': 'affiliateCampaignId=<ePNCampaignId>,affiliateRefrenceId=<refrenceId>'
            }
        });

        res.status(200).json(response?.data ?? []);
    } catch (error) {
        res.status(500).json('Internal Server Error!');
    }
}
