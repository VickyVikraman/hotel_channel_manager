pipeline {
    agent {
        dockerfile true
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deliver') {
            steps {
                // sh 'npm run build'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh 'kill $(cat .pidfile)'
                // sh './jenkins/scripts/kill.sh'
            }
        }
    }
}