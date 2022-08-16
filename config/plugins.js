module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('ACCESS_KEY_ID'),
        secretAccessKey: env('ACCESS_SECRET'),
        region: env('REGION'),
        params: {
          Bucket: env('BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
