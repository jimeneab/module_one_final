pipeline {
    agent any

    stages{
        stage('Cloning Repo'){
            steps {
                git 'https://github.com/jimeneab/module_one_final'
            }
        }

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
