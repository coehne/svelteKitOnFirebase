# SvelteKit + Firebase Hosting

This is demo project on how to deploy SvelteKit to Firebase framework aware hosting.

## Installation steps

### Setup a [new SvelteKit](https://kit.svelte.dev/docs/creating-a-project) project with

```zsh
npm create svelte@latest my-app
```

Use the assistant to configure your desired SvelteKit setup and run `npm install` afterwards.

### Enable the [web framework](https://github.com/FirebaseExtended/firebase-framework-tools#enable-framework-awareness) feature in the Firebase CLI with

```zsh
firebase experiments:enable webframeworks
```

### Initialize Firebase hosting with

```zsh
firebase init hosting
```

Follow the steps in the CLI to connect to an existing Firebase project or create a new one. Make sure the [Blaze plan](https://firebase.google.com/pricing) of Firebase is enabled for the project.

### Configuring the cloud function

You can configure the the cloud function in the frameworksBackend object of your `firebase.json` file. It should be analog the the [regular onRequest cloud function configuration](https://firebase.google.com/docs/reference/functions/2nd-gen/node/firebase-functions.https.httpsoptions.md#httpshttpsoptions_interface).

A sample `firebase.json` configuration could look like:

```json
{
	"hosting": {
		"source": ".",
		"ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
		"frameworksBackend": {
			"region": "europe-west1",
			"invoker": "public"
		}
	}
}
```

If you want to reduce cold start time, you could also add `"minInstances": 1` to the configuration. This will keep the cloud function warm. But be aware that this will cost you extra money.

## Developing

Serve the app locally with

```zsh
firebase serve
```

It will reflect your code changes. However, I still needed to manually reload the page in the browser to see the changes.

## Deploying

I used the default auto adapter of SvelteKit which will be a bit lost in detecting a supported production environment. Nonetheless, deploying still worked for me.

Run the firebase deploy command

```zsh
firebase deploy
```

It will try to enable all needed APIs for you which might take a while. Hence, there is a possibility that the first or even second deployment will fail. It might also throw an error like:

```text
Ensure that the Cloud Functions service account has 'artifactregistry.repositories.list' and 'artifactregistry.repositories.get' permissions. You can add the permissions by granting the role 'roles/artifactregistry.reader'.
```

Just chill a bit and re-run the command. It should work after a few minutes since Firebase will take care of it in the background.

The deployment should now be successful!

## Troubleshooting

I still got an error when opening the URL of the deployed app. It was something like:

```text
Error: Forbidden
Your client does not have permission to get URL / from this server.
```

This is due to a missing permission to invoke the deployed function publicly. I did not test it but I think you can use the invoker property on the cloud function directly and set it to public. I only figured that out after I fixed it with the following command:

```bash
gcloud functions add-invoker-policy-binding functionName \ # Change this to your generated function name
      --region="europe-west1" \ # Change this to your region
      --member="allUsers" \
      --project="projectId" # Change this to your project id
```

Afterwards, the app should be accessible via the URL shown in the Firebase CLI.

## Terraform

If you use Terraform for your GCP Cloud, you might find it helpfull that the deploy command will enable the following Google APIs: - cloudfunctions.googleapis.com - cloudbuild.googleapis.com - artifactregistry.googleapis.com

The cloud functions service account will also need the role `roles/artifactregistry.reader`.

## Resources

- [Firebase Frameworks Tools Repo](https://github.com/FirebaseExtended/firebase-framework-tools)
- [Firebase HTTPS Functions Configuration Options](https://firebase.google.com/docs/reference/functions/2nd-gen/node/firebase-functions.https.httpsoptions.md#httpshttpsoptions_interface)
- [Firebase Frameworks Hosting Docs](https://firebase.google.com/docs/hosting/frameworks/frameworks-overview)
