pipeline {
    agent any

    stages{

        stage('Install dependecies'){
            steps {
                sh 'npm install'
            }
        }

        stage('build'){
            steps {
                sh 'npm start'
            }
        }

        stage('test'){
            steps {
                sh 'npm test'
            }
        }
    }
}
