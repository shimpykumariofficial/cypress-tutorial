# Deploy your first e2e Cypress test on Red Hat Openshift

## Introduction

This tutorial aims to demonstrate the e2e tests using cypress tool. 
<br>The following Architecture diagram gives an overview of how Cypress is different from Selenium.
<img width="1194" alt="Screenshot 2021-02-02 at 11 54 31" src="https://user-images.githubusercontent.com/78303150/106593877-a2062480-6551-11eb-8732-7951c157f9e8.png">

## Prerequisites

For this tutorial you will need:

- Your own GitHub account
- Sign up for your IBM Cloud account – https://ibm.biz/BdfFXA
- Node.js: https://nodejs.org/en/download/
- Visual Studio Code: https://code.visualstudio.com/download
- Register for the live stream and access the replay – https://www.crowdcast.io/e/testing-with-cypress/register
- Red Hat OpenShift Cluster 4 on IBM Cloud. You can get it from
  - URL: https://oc-knative.mybluemix.net/
  - Key: oslab
- oc CLI (can be downloaded from this link or you can use it at http://shell.cloud.ibm.com/.

## Estimated Time

It will take you around 15 minutes to complete this tutorial.

## Steps

- Fork the GitHub repo
- Install dependencies by running the following command in terminal (from inside your app directory i.e. where package.json is located): <I><B>npm install </I></B>
- Log into the OpenShift cluster from the CLI
- Install OpenShift Serverless Operator from OperatorHub

## Fork and Clone the GitHub repo

- First thing you need to do is fork the GitHub repository to your own GitHub account so you can make your own changes later.
- Clone your fork of the repository.<br>

```
git clone https://github.com/<YOUR-ACCOUNT-NAME>/cypress-tutorial
```

## Summary

In this tutorial, you created your first test with cypress and run them on Openshift Cluster.



